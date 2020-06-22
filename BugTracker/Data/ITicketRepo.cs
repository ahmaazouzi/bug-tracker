using System;
using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Data
{
    public interface ITicketRepo
    {
        IEnumerable<Ticket> GetTickets();
        Ticket GetTicketById(int id);
    }
}
