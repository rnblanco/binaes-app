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
    public class HORARIOxAREAController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/HORARIOxAREA
        public IQueryable<HORARIOxAREA> GetHORARIOxAREA()
        {
            return db.HORARIOxAREA;
        }

        // GET: api/HORARIOxAREA/5
        [ResponseType(typeof(HORARIOxAREA))]
        public async Task<IHttpActionResult> GetHORARIOxAREA(int id)
        {
            HORARIOxAREA hORARIOxAREA = await db.HORARIOxAREA.FindAsync(id);
            if (hORARIOxAREA == null)
            {
                return NotFound();
            }

            return Ok(hORARIOxAREA);
        }

        // PUT: api/HORARIOxAREA/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutHORARIOxAREA(int id, HORARIOxAREA hORARIOxAREA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != hORARIOxAREA.id_Horario)
            {
                return BadRequest();
            }

            db.Entry(hORARIOxAREA).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HORARIOxAREAExists(id))
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

        // POST: api/HORARIOxAREA
        [ResponseType(typeof(HORARIOxAREA))]
        public async Task<IHttpActionResult> PostHORARIOxAREA(HORARIOxAREA hORARIOxAREA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.HORARIOxAREA.Add(hORARIOxAREA);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = hORARIOxAREA.id_Horario }, hORARIOxAREA);
        }

        // DELETE: api/HORARIOxAREA/5
        [ResponseType(typeof(HORARIOxAREA))]
        public async Task<IHttpActionResult> DeleteHORARIOxAREA(int id)
        {
            HORARIOxAREA hORARIOxAREA = await db.HORARIOxAREA.FindAsync(id);
            if (hORARIOxAREA == null)
            {
                return NotFound();
            }

            db.HORARIOxAREA.Remove(hORARIOxAREA);
            await db.SaveChangesAsync();

            return Ok(hORARIOxAREA);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool HORARIOxAREAExists(int id)
        {
            return db.HORARIOxAREA.Count(e => e.id_Horario == id) > 0;
        }
    }
}