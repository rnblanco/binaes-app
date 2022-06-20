using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using backend.Models;

namespace backend.Controllers
{
    public class EVENTOController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/EVENTO
        public IQueryable<EVENTO> GetEVENTO()
        {
            return db.EVENTO;
        }

        // GET: api/EVENTO/5
        [ResponseType(typeof(EVENTO))]
        public async Task<IHttpActionResult> GetEVENTO(int id)
        {
            EVENTO eVENTO = await db.EVENTO.FindAsync(id);
            if (eVENTO == null)
            {
                return NotFound();
            }

            return Ok(eVENTO);
        }

        // PUT: api/EVENTO/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutEVENTO(int id, EVENTO eVENTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != eVENTO.id_Evento)
            {
                return BadRequest();
            }

            db.Entry(eVENTO).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EVENTOExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/EVENTO
        [ResponseType(typeof(EVENTO))]
        public async Task<IHttpActionResult> PostEVENTO(EVENTO eVENTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EVENTO.Add(eVENTO);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = eVENTO.id_Evento }, eVENTO);
        }

        // DELETE: api/EVENTO/5
        [ResponseType(typeof(EVENTO))]
        public async Task<IHttpActionResult> DeleteEVENTO(int id)
        {
            EVENTO eVENTO = await db.EVENTO.FindAsync(id);
            if (eVENTO == null)
            {
                return NotFound();
            }

            db.EVENTO.Remove(eVENTO);
            await db.SaveChangesAsync();

            return Ok(eVENTO);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EVENTOExists(int id)
        {
            return db.EVENTO.Count(e => e.id_Evento == id) > 0;
        }
    }
}