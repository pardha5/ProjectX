import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.bson.Document;
import com.mongodb.Block;
import com.mongodb.client.FindIterable;
import static com.mongodb.client.model.Sorts.ascending;
import static java.util.Arrays.asList;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import static com.mongodb.client.model.Filters.*;

/**
 * Servlet implementation class DisplayStock
 */
@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Login() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		MongoClientURI uri=new MongoClientURI("mongodb://root:root@ds037234.mongolab.com:37234/expensetracker");	
		MongoClient client=new MongoClient(uri);
		DB db=client.getDB(uri.getDatabase());
		DBCollection customers=db.getCollection("customers");
		String pname = request.getParameter("name");
	    	String ppassword=request.getParameter("password");
		
		//BasicDBObject orderBy = new BasicDBObject("price", 1);
		//DBCursor cursor =customers.findOne(eq("name", "'+pname+'"));
		//Object document=cursor.hasNext()? cursor.next():null;
		
		
		/*PrintWriter out = response.getWriter();
		try {
			while (cursor.hasNext())
			{
				out.println("<p>"+cursor.next()+"</p>");
			}
		}
		
		catch (Exception e)
		{
			System.out.println(e);
		}
		finally 
		{
			client.close();
		}*/
		//doGet(request, response);
	}

}