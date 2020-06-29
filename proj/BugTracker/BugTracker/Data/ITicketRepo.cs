using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Data
{
    public interface ITicketRepo
    {
        bool SaveChanges();

        IEnumerable<Ticket> GetTickets();
        Ticket GetTicketById(int id);
        void CreateTicket(Ticket ticket);
        void UpdateTicket(Ticket ticket);
        void DeleteTicket(Ticket ticket);
    }
}
