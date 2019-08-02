using Application.Models;
using Microsoft.EntityFrameworkCore;
using SportsApplication.Models;
using SportsApplicationApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Models
{
    public class TestRepository : ITestsRepository
    {
        private SportsApplicationApiContext context;

        public TestRepository(SportsApplicationApiContext context)
        {
            this.context = context;
        }
        public async Task<test> DeleteTest(int testId)
        {
            test tests = await context.test.FindAsync(testId);
            if (tests != null)
            {
                context.test.Remove(tests);
            }
            return tests;
        }

        public async Task<IEnumerable<test>> GetTest()
        {
            foreach (var test in context.test)
            {
                test.number_participants = NumberOfParticipants(test.TestId);
            }
            return  context.test.ToList();
        }

        public async Task<test> GetTestID(int? testId)
        {
            return await context.test.FindAsync(testId);
        }

        public async Task<test> InsertTest(test tests)
        {
            await context.test.AddAsync(tests);
            return tests;
        }



        public void Update(test tests)
        {
            context.Entry(tests).State = EntityState.Modified;
        }


        public int NumberOfParticipants(int testId)
        {
            int count = (from s in context.Details
                         join p in context.test
                         on s.TestId equals p.TestId
                         where s.TestId.Equals(testId)
                         select s.Name).Count();
            return count;
        }
    }
}
