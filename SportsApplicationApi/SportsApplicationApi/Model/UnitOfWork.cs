using SportsApplicationApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Models
{
    public class UnitOfWork : IUnitOfWork
    {
        private SportsApplicationApiContext Context;
        private ITestsRepository testsRepository;
        private IDetails _detailRepository;
        public UnitOfWork(SportsApplicationApiContext Context)
        {
            this.Context = Context;
        }
        public ITestsRepository TestsRepository
        {
            get
            {
                return testsRepository = new TestRepository(Context);
            }
        }
        public IDetails detailRepository
        {
            get
            {
                return _detailRepository = new DetailsRepository(Context);
            }
        }

       

        public async Task Save()
        {
            await Context.SaveChangesAsync();
        }
    }
}
