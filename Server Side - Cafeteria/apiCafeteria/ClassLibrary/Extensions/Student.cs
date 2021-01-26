using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace ClassLibrary.EF
{
    public partial class Student
    {
        public static bool CheckUserLogIn(string Name, int StudentId)
        {
            bool verified = false;
            CafeteriaDB db = new CafeteriaDB();
            Student s = db.Student.Where(x => x.StudentId == StudentId).SingleOrDefault();
            if (s.Name == Name)
            {
                verified = true;
            }
            return verified;
        }
        
        
    }
}
