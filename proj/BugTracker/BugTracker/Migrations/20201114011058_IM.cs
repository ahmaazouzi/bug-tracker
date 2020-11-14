using System;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.Data.EntityFrameworkCore.Metadata;

namespace BugTracker.Migrations
{
    public partial class IM : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    FirstName = table.Column<string>(maxLength: 256, nullable: false),
                    MiddleName = table.Column<string>(maxLength: 256, nullable: true),
                    LastName = table.Column<string>(maxLength: 256, nullable: false),
                    PhotoUrl = table.Column<string>(maxLength: 1024, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: false),
                    Role = table.Column<string>(nullable: true),
                    SpiritAnimal = table.Column<string>(maxLength: 256, nullable: true),
                    Bio = table.Column<string>(maxLength: 5000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Teams",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teams", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "AccountTeam",
                columns: table => new
                {
                    AccountID = table.Column<int>(nullable: false),
                    TeamID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountTeam", x => new { x.AccountID, x.TeamID });
                    table.ForeignKey(
                        name: "FK_AccountTeam_Accounts_AccountID",
                        column: x => x.AccountID,
                        principalTable: "Accounts",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AccountTeam_Teams_TeamID",
                        column: x => x.TeamID,
                        principalTable: "Teams",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Sprints",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    StartDate = table.Column<DateTime>(nullable: false),
                    EndDate = table.Column<DateTime>(nullable: false),
                    Goals = table.Column<string>(maxLength: 30000, nullable: true),
                    Retrospective = table.Column<string>(maxLength: 30000, nullable: true),
                    Points = table.Column<int>(nullable: false),
                    TeamID = table.Column<int>(nullable: false),
                    PointsEliminated = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sprints", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Sprints_Teams_TeamID",
                        column: x => x.TeamID,
                        principalTable: "Teams",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Tickets",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Summary = table.Column<string>(maxLength: 3000, nullable: false),
                    Description = table.Column<string>(maxLength: 30000, nullable: true),
                    DateReported = table.Column<DateTime>(nullable: true),
                    ReporterID = table.Column<int>(nullable: false),
                    DateAssigned = table.Column<DateTime>(nullable: true),
                    AssignmentID = table.Column<int>(nullable: true),
                    Status = table.Column<string>(nullable: false),
                    SprintID = table.Column<int>(nullable: false),
                    DateClosed = table.Column<DateTime>(nullable: true),
                    Points = table.Column<byte>(nullable: false),
                    TeamID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tickets", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Tickets_Accounts_ReporterID",
                        column: x => x.ReporterID,
                        principalTable: "Accounts",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Tickets_Sprints_SprintID",
                        column: x => x.SprintID,
                        principalTable: "Sprints",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_Tickets_Teams_TeamID",
                        column: x => x.TeamID,
                        principalTable: "Teams",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Assignments",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    TicketID = table.Column<int>(nullable: false),
                    AccountID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Assignments", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Assignments_Accounts_AccountID",
                        column: x => x.AccountID,
                        principalTable: "Accounts",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Assignments_Tickets_TicketID",
                        column: x => x.TicketID,
                        principalTable: "Tickets",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Attachments",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Url = table.Column<string>(maxLength: 2500, nullable: false),
                    TicketID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Attachments", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Attachments_Tickets_TicketID",
                        column: x => x.TicketID,
                        principalTable: "Tickets",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Comments",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    AccountID = table.Column<int>(nullable: false),
                    TicketID = table.Column<int>(nullable: false),
                    Payload = table.Column<string>(maxLength: 16000, nullable: false),
                    Date = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Comments_Accounts_AccountID",
                        column: x => x.AccountID,
                        principalTable: "Accounts",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Comments_Tickets_TicketID",
                        column: x => x.TicketID,
                        principalTable: "Tickets",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AccountTeam_TeamID",
                table: "AccountTeam",
                column: "TeamID");

            migrationBuilder.CreateIndex(
                name: "IX_Assignments_AccountID",
                table: "Assignments",
                column: "AccountID");

            migrationBuilder.CreateIndex(
                name: "IX_Assignments_TicketID",
                table: "Assignments",
                column: "TicketID",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Attachments_TicketID",
                table: "Attachments",
                column: "TicketID");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_AccountID",
                table: "Comments",
                column: "AccountID");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_TicketID",
                table: "Comments",
                column: "TicketID");

            migrationBuilder.CreateIndex(
                name: "IX_Sprints_TeamID",
                table: "Sprints",
                column: "TeamID");

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_ReporterID",
                table: "Tickets",
                column: "ReporterID");

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_SprintID",
                table: "Tickets",
                column: "SprintID");

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_TeamID",
                table: "Tickets",
                column: "TeamID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AccountTeam");

            migrationBuilder.DropTable(
                name: "Assignments");

            migrationBuilder.DropTable(
                name: "Attachments");

            migrationBuilder.DropTable(
                name: "Comments");

            migrationBuilder.DropTable(
                name: "Tickets");

            migrationBuilder.DropTable(
                name: "Accounts");

            migrationBuilder.DropTable(
                name: "Sprints");

            migrationBuilder.DropTable(
                name: "Teams");
        }
    }
}
