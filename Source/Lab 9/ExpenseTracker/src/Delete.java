import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

/**
 * Servlet implementation class DeleteStock
 */
@WebServlet("/Delete")
public class Delete extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Delete() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		MongoClientURI uri=new MongoClientURI("mongodb://root:root@ds037234.mongolab.com:37234/expensetracker");	
		MongoClient client=new MongoClient(uri);
		
		try {
			
		DB db=client.getDB(uri.getDatabase());
		DBCollection users=db.getCollection("users");
		
		BasicDBObject deleteQuery = new BasicDBObject("name", request.getParameter("name"));
		users.remove(deleteQuery);
		PrintWriter out = response.getWriter();
		out.println("Account "+request.getParameter("name")+" Deleted");
		out.println("<a href=\"Home.html\">Go Back to Home</a>");
		doGet(request, response);
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
		finally {
			client.close();
		}
		
		doGet(request, response);
	}

}