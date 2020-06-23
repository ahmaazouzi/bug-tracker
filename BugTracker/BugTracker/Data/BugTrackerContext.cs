using Microsoft.EntityFrameworkCore;
using BugTracker.Models;

namespace BugTracker.Data
{
    public class BugTrackerContext: DbContext
    {
        public BugTrackerContext(DbContextOptions<BugTrackerContext> options)
            : base(options)
        {
        }

        public DbSet<Ticket> Tickets { get; set; }
        public DbSet<Account>  Accounts { get; set; }
        public DbSet<Team>  Teams { get; set; }
        public DbSet<Comment> Comments { get; set; }
    }
}