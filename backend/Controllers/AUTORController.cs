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
    public class AUTORController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/AUTORs
        public IQueryable<AUTOR> GetAUTOR()
        {
            return db.AUTOR;
        }

        // GET: api/AUTORs/5
        [ResponseType(typeof(AUTOR))]
        public async Task<IHttpActionResult> GetAUTOR(int id)
        {
            AUTOR aUTOR = await db.AUTOR.FindAsync(id);
            if (aUTOR == null)
            {
                return NotFound();
            }

            return Ok(aUTOR);
        }

        // PUT: api/AUTORs/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutAUTOR(int id, AUTOR aUTOR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != aUTOR.id_Autor)
            {
                return BadRequest();
            }

            db.Entry(aUTOR).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AUTORExists(id))
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

        // POST: api/AUTORs
        [ResponseType(typeof(AUTOR))]
        public async Task<IHttpActionResult> PostAUTOR(AUTOR aUTOR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AUTOR.Add(aUTOR);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = aUTOR.id_Autor }, aUTOR);
        }

        // DELETE: api/AUTORs/5
        [ResponseType(typeof(AUTOR))]
        public async Task<IHttpActionResult> DeleteAUTOR(int id)
        {
            AUTOR aUTOR = await db.AUTOR.FindAsync(id);
            if (aUTOR == null)
            {
                return NotFound();
            }

            db.AUTOR.Remove(aUTOR);
            await db.SaveChangesAsync();

            return Ok(aUTOR);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AUTORExists(int id)
        {
            return db.AUTOR.Count(e => e.id_Autor == id) > 0;
        }
    }
}