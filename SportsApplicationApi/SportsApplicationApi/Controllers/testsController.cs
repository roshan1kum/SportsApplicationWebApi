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
    [Route("api/tests")]
    public class testsController : Controller
    {
        // private readonly SportsApplicationApiContext _context;
        private readonly IUnitOfWork unitOfWork;

        public testsController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        // GET: api/tests
        [HttpGet]
        public async Task<IEnumerable<test>> Gettest()
        {
            return await unitOfWork.TestsRepository.GetTest();
        }

        // GET: api/tests/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Gettest([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var test = await unitOfWork.TestsRepository.GetTestID(id);

            if (test == null)
            {
                return NotFound();
            }

            return Ok(test);
        }

        // PUT: api/tests/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> Puttest([FromRoute] int id, [FromBody] test test)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != test.TestId)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(test).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!testExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/tests
        [HttpPost]
        public ActionResult Posttest([FromBody] test test)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            unitOfWork.TestsRepository.InsertTest(test);
            unitOfWork.Save();

            return CreatedAtAction("Gettest", new { id = test.TestId }, test);
        }

        // DELETE: api/tests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deletetest([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            test tests = await unitOfWork.TestsRepository.GetTestID(id);
            await unitOfWork.TestsRepository.DeleteTest(id);
            await unitOfWork.Save();

            return Ok(tests);
        }

        //private bool testExists(int id)
        //{
        //    return _context.test.Any(e => e.TestId == id);
        //}
    }
}