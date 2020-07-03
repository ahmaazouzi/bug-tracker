using Microsoft.EntityFrameworkCore;
using BugTracker.Models;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System;

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
        public DbSet<Attachment> Attachments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Ticket>()
                .HasOne(t => t.Assignment).WithOne(a => a.Ticket)
                .HasForeignKey<Assignment>(a => a.TicketID)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}