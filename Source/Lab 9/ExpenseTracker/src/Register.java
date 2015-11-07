import java.io.IOException;

import javax.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.WriteResult;
import com.mongodb.gridfs.CLI;
import com.mongodb.util.JSON;

@WebServlet("/Register")
public class Register extends HttpServlet {

    public Register() {
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
    	try
    	{
	    	String name = request.getParameter("name");
	    	String password=request.getParameter("password");
	    	String email=request.getParameter("email");
	    	
	    	BasicDBObject dbObject = new BasicDBObject();
	    	dbObject.put("name", name);
	    	dbObject.put("password", password);
	    	dbObject.put("email", email);
	    	
			System.out.println(dbObject);
			MongoClientURI uri=new MongoClientURI("mongodb://root:root@ds037234.mongolab.com:37234/expensetracker");	
			MongoClient client=new MongoClient(uri);
			DB db=client.getDB(uri.getDatabase());
			DBCollection customers=db.getCollection("users");
			
			WriteResult result=customers.insert(dbObject);
			
			//JOptionPane.showMessageDialog(null, "Details has been Added");
			
			response.sendRedirect("Home.html");
		}
	    	catch(Exception e)
	    	{
	    		System.out.println(e);
	    	}
    	
    }

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}