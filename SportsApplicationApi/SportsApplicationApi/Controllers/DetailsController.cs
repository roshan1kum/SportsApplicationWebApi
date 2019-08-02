using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportsApplication.Models;
using SportsApplicationApi.Models;

namespace SportsApplicationApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Details")]
    public class DetailsController : Controller
    {
        private readonly IUnitOfWork unitOfWork;

        public DetailsController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        // GET: api/Details
        //[HttpGet("{id}")]
        [Route("GetDetails/{id}")]
        public IEnumerable<Details> GetDetails([FromRoute] int id)
        {
            return unitOfWork.detailRepository.GetDetails(id);
        }

        [Route("Results/{id}")]
        //[HttpGet]
        public async Task<IActionResult> GetAthleteResults([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var details = await unitOfWork.detailRepository.GetDetailsID(id);

            if (details == null)
            {
                return NotFound();
            }

            return Ok(details);
        }

        //PUT: api/Details/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDetails([FromRoute] int id, [FromBody] Details details)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != details.TestResultId)
            {
                return BadRequest();
            }

            unitOfWork.detailRepository.EditAthlete(details);

            try
            {
               await  unitOfWork.Save();
            }
            catch (DbUpdateConcurrencyException)
            {

            }

            return NoContent();
        }

        // POST: api/Details
        [HttpPost("{id}")]
        public async Task<IActionResult> PostDetails([FromBody] Details details,int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            details.TestId = id;
            await unitOfWork.detailRepository.InsertAthlete(details);
            await unitOfWork.Save();

            return CreatedAtAction("GetDetails", new { id = details.TestResultId }, details);
        }

        //// DELETE: api/Details/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var details = await unitOfWork.detailRepository.GetDetailsID(id);
            if (details == null)
            {
                return NotFound();
            }

            await unitOfWork.detailRepository.DeleteAthlete(id);
            await unitOfWork.Save();

            return Ok(details);
        }

        //private bool DetailsExists(int id)
        //{
        //    return _context.Details.Any(e => e.TestResultId == id);
        //}
    }
}