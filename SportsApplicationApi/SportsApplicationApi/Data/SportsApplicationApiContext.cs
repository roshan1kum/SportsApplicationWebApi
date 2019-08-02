using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SportsApplication.Models;

namespace SportsApplicationApi.Models
{
    public class SportsApplicationApiContext : DbContext
    {
        public SportsApplicationApiContext (DbContextOptions<SportsApplicationApiContext> options)
            : base(options)
        {
        }

        public DbSet<SportsApplication.Models.test> test { get; set; }

        public DbSet<SportsApplication.Models.Details> Details { get; set; }
    }
}
