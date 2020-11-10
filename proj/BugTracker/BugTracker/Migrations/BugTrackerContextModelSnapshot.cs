﻿// <auto-generated />
using System;
using BugTracker.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BugTracker.Migrations
{
    [DbContext(typeof(BugTrackerContext))]
    partial class BugTrackerContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("BugTracker.Models.Account", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Bio")
                        .HasColumnType("varchar(5000)")
                        .HasMaxLength(5000);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("varchar(256)")
                        .HasMaxLength(256);

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("varchar(256)")
                        .HasMaxLength(256);

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("varchar(256)")
                        .HasMaxLength(256);

                    b.Property<int?>("MembershipID")
                        .HasColumnType("int");

                    b.Property<string>("MiddleName")
                        .HasColumnType("varchar(256)")
                        .HasMaxLength(256);

                    b.Property<string>("PhotoUrl")
                        .HasColumnType("varchar(1024)")
                        .HasMaxLength(1024);

                    b.Property<string>("Role")
                        .HasColumnType("text");

                    b.Property<string>("SpiritAnimal")
                        .HasColumnType("varchar(256)")
                        .HasMaxLength(256);

                    b.Property<int>("TeamID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("TeamID");

                    b.ToTable("Accounts");
                });

            modelBuilder.Entity("BugTracker.Models.Assignment", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("AccountID")
                        .HasColumnType("int");

                    b.Property<int>("TicketID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("AccountID");

                    b.HasIndex("TicketID")
                        .IsUnique();

                    b.ToTable("Assignments");
                });

            modelBuilder.Entity("BugTracker.Models.Attachment", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("TicketID")
                        .HasColumnType("int");

                    b.Property<string>("Url")
                        .IsRequired()
                        .HasColumnType("varchar(2500)")
                        .HasMaxLength(2500);

                    b.HasKey("ID");

                    b.HasIndex("TicketID");

                    b.ToTable("Attachments");
                });

            modelBuilder.Entity("BugTracker.Models.Comment", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("AccountID")
                        .HasColumnType("int");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime");

                    b.Property<string>("Payload")
                        .IsRequired()
                        .HasColumnType("varchar(16000)")
                        .HasMaxLength(16000);

                    b.Property<int>("TicketID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("AccountID");

                    b.HasIndex("TicketID");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("BugTracker.Models.Membership", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("AccountID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("AccountID")
                        .IsUnique();

                    b.ToTable("Memberships");
                });

            modelBuilder.Entity("BugTracker.Models.Sprint", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime");

                    b.Property<string>("Goals")
                        .HasColumnType("varchar(30000)")
                        .HasMaxLength(30000);

                    b.Property<int>("Points")
                        .HasColumnType("int");

                    b.Property<int>("PointsEliminated")
                        .HasColumnType("int");

                    b.Property<string>("Retrospective")
                        .HasColumnType("varchar(30000)")
                        .HasMaxLength(30000);

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime");

                    b.Property<int>("TeamID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("TeamID");

                    b.ToTable("Sprints");
                });

            modelBuilder.Entity("BugTracker.Models.Team", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int?>("MembershipID")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("ID");

                    b.HasIndex("MembershipID");

                    b.ToTable("Teams");
                });

            modelBuilder.Entity("BugTracker.Models.Ticket", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int?>("AssignmentID")
                        .HasColumnType("int");

                    b.Property<DateTime?>("DateAssigned")
                        .HasColumnType("datetime");

                    b.Property<DateTime?>("DateClosed")
                        .HasColumnType("datetime");

                    b.Property<DateTime?>("DateReported")
                        .HasColumnType("datetime");

                    b.Property<string>("Description")
                        .HasColumnType("varchar(30000)")
                        .HasMaxLength(30000);

                    b.Property<byte>("Points")
                        .HasColumnType("tinyint");

                    b.Property<int>("ReporterID")
                        .HasColumnType("int");

                    b.Property<int>("SprintID")
                        .HasColumnType("int");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Summary")
                        .IsRequired()
                        .HasColumnType("varchar(3000)")
                        .HasMaxLength(3000);

                    b.Property<int>("TeamID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("ReporterID");

                    b.HasIndex("SprintID");

                    b.HasIndex("TeamID");

                    b.ToTable("Tickets");
                });

            modelBuilder.Entity("BugTracker.Models.Account", b =>
                {
                    b.HasOne("BugTracker.Models.Team", null)
                        .WithMany("Members")
                        .HasForeignKey("TeamID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("BugTracker.Models.Assignment", b =>
                {
                    b.HasOne("BugTracker.Models.Account", "Account")
                        .WithMany("Assignments")
                        .HasForeignKey("AccountID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BugTracker.Models.Ticket", "Ticket")
                        .WithOne("Assignment")
                        .HasForeignKey("BugTracker.Models.Assignment", "TicketID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("BugTracker.Models.Attachment", b =>
                {
                    b.HasOne("BugTracker.Models.Ticket", null)
                        .WithMany("Attachments")
                        .HasForeignKey("TicketID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("BugTracker.Models.Comment", b =>
                {
                    b.HasOne("BugTracker.Models.Account", "Account")
                        .WithMany()
                        .HasForeignKey("AccountID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BugTracker.Models.Ticket", null)
                        .WithMany("Comments")
                        .HasForeignKey("TicketID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("BugTracker.Models.Membership", b =>
                {
                    b.HasOne("BugTracker.Models.Account", "Account")
                        .WithOne("Membership")
                        .HasForeignKey("BugTracker.Models.Membership", "AccountID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("BugTracker.Models.Sprint", b =>
                {
                    b.HasOne("BugTracker.Models.Team", null)
                        .WithMany("Sprints")
                        .HasForeignKey("TeamID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("BugTracker.Models.Team", b =>
                {
                    b.HasOne("BugTracker.Models.Membership", null)
                        .WithMany("Teams")
                        .HasForeignKey("MembershipID");
                });

            modelBuilder.Entity("BugTracker.Models.Ticket", b =>
                {
                    b.HasOne("BugTracker.Models.Account", "Reporter")
                        .WithMany()
                        .HasForeignKey("ReporterID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BugTracker.Models.Sprint", null)
                        .WithMany("AssignedTickets")
                        .HasForeignKey("SprintID")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("BugTracker.Models.Team", null)
                        .WithMany("Tickets")
                        .HasForeignKey("TeamID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
