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
    public class RESERVAController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/RESERVA
        public IQueryable<RESERVA> GetRESERVA()
        {
            return db.RESERVA;
        }

        // GET: api/RESERVA/5
        [ResponseType(typeof(RESERVA))]
        public async Task<IHttpActionResult> GetRESERVA(int id)
        {
            RESERVA rESERVA = await db.RESERVA.FindAsync(id);
            if (rESERVA == null)
            {
                return NotFound();
            }

            return Ok(rESERVA);
        }

        // PUT: api/RESERVA/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutRESERVA(int id, RESERVA rESERVA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != rESERVA.id_Reserva)
            {
                return BadRequest();
            }

            db.Entry(rESERVA).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RESERVAExists(id))
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

        // POST: api/RESERVA
        [ResponseType(typeof(RESERVA))]
        public async Task<IHttpActionResult> PostRESERVA(RESERVA rESERVA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.RESERVA.Add(rESERVA);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = rESERVA.id_Reserva }, rESERVA);
        }

        // DELETE: api/RESERVA/5
        [ResponseType(typeof(RESERVA))]
        public async Task<IHttpActionResult> DeleteRESERVA(int id)
        {
            RESERVA rESERVA = await db.RESERVA.FindAsync(id);
            if (rESERVA == null)
            {
                return NotFound();
            }

            db.RESERVA.Remove(rESERVA);
            await db.SaveChangesAsync();

            return Ok(rESERVA);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RESERVAExists(int id)
        {
            return db.RESERVA.Count(e => e.id_Reserva == id) > 0;
        }
    }
}