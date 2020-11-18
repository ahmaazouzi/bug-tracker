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
            ChangeTracker.LazyLoadingEnabled = false;
        }

        public DbSet<Ticket> Tickets { get; set; }
        public DbSet<Account>  Accounts { get; set; }
        public DbSet<Team>  Teams { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Attachment> Attachments { get; set; }
        public DbSet<Assignment> Assignments { get; set; }
        public DbSet<Sprint> Sprints { get; set; }
        public DbSet<AccountTeam> AccountTeam { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Ticket>()
                .HasOne(t => t.Assignment).WithOne(a => a.Ticket)
                .HasForeignKey<Assignment>(a => a.TicketID)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Sprint>()
                .HasMany(s => s.AssignedTickets)
                .WithOne()
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<AccountTeam>()
                .HasKey(a => new { a.AccountID, a.TeamID });

            modelBuilder.Entity<AccountTeam>()
                .HasOne(at => at.Account)
                .WithMany(a => a.AccountTeams)
                .HasForeignKey(at => at.AccountID);

            modelBuilder.Entity<AccountTeam>()
                .HasOne(at => at.Team)
                .WithMany(t => t.AccountTeams)
                .HasForeignKey(at => at.TeamID);

        }
    }
}