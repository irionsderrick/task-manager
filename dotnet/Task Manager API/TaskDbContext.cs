using Microsoft.EntityFrameworkCore;
using Task_Manager_API.Models;
using Task = Task_Manager_API.Models.Task;

namespace Task_Manager_API
{
    public class TaskDbContext(DbContextOptions<TaskDbContext> options) : DbContext(options)
    {
        public required DbSet<Task> Tasks { get; set; }
    }
}
