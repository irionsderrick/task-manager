using Microsoft.EntityFrameworkCore;
using Task_Manager_API.Models;

namespace Task_Manager_API
{
    public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
    {
        public required DbSet<Models.Task> Tasks { get; set; }
        public required DbSet<User> Users { get; set; }
    }
}
