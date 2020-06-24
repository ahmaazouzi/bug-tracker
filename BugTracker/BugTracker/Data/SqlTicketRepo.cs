using System;
using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Data
{
    public class SqlTicketRepo: ITicketRepo
    {
        public SqlTicketRepo()
        {
        }

        public Ticket GetTicketById(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Ticket> GetTickets()
        {
            throw new NotImplementedException();
        }
    }
}
