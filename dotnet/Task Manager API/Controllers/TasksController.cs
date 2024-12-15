using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Task_Manager_API.Models;

namespace Task_Manager_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController(TaskDbContext taskContext) : ControllerBase
    {
        private readonly TaskDbContext _taskContext = taskContext;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Models.Task>>> GetTasks()
        {
            if (_taskContext.Tasks == null)
            {
                return NotFound();
            }
            return await _taskContext.Tasks.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Models.Task>> GetTaskById(int id)
        {
            if (_taskContext.Tasks == null)
            {
                return NotFound();
            }
            var taskObj = await _taskContext.Tasks.FindAsync(id);

            if (taskObj == null)
            {
                return NotFound();
            }
            return taskObj;
        }

        [HttpPost]
        public async Task<ActionResult<Models.Task>> CreateTask(Models.Task task)
        {
            _taskContext.Tasks.Add(task);
            await _taskContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTaskById), new { id = task.Id }, task);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateTask(int id, Models.Task task)
        {
            if (id != task.Id)
            {
                return BadRequest();
            }
            _taskContext.Entry(task).State = EntityState.Modified;
            try
            {
                await _taskContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTask(int id)
        {
           if(_taskContext == null) 
            {  
                return NotFound(); 
            }
            var task = await _taskContext.Tasks.FindAsync(id);
            if (task == null)
            {
                return NotFound();
            }
            _taskContext.Tasks.Remove(task);
            await _taskContext.SaveChangesAsync();
            return Ok();
        }
        
    }
}
