namespace Task_Manager_API.Models
{
    public class Task
    {
        public int Id { get; set; }
        public required string Description { get; set; }
        public required int UserId { get; set; }
        public required User User { get; set; }
    }

}
