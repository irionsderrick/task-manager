using Microsoft.EntityFrameworkCore;

namespace Task_Manager_API.Models
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) : base(options) 
        {
            
        }
        
        public DbSet<Task> Tasks { get; set; }
    }
}
