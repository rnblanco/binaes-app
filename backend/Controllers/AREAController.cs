using backend.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace backend.Controllers
{
    [Authorize]
    public class AREAController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/AREA
        public IQueryable<AREA_PA_U_TA> GetAREA()
        {
            var areas = db.AREA.ToList();
            List<AREA_PA_U_TA> areasList = new List<AREA_PA_U_TA>();
            foreach (var area in areas)
            {
                AREA_PA_U_TA aREA = new AREA_PA_U_TA();
                aREA.id_Area = area.id_Area;
                aREA.nombre = area.nombre;
                aREA.descripcion = area.descripcion;
                aREA.PISOAREA = area.PISOAREA;

                aREA.USUARIO = new USUARIO_rU();
                aREA.USUARIO.id_Usuario = area.USUARIO.id_Usuario;
                aREA.USUARIO.nombre = area.USUARIO.nombre;
                aREA.USUARIO.email = area.USUARIO.email;
                aREA.USUARIO.telefono = area.USUARIO.telefono;
                aREA.USUARIO.ocupacion = area.USUARIO.ocupacion;
                aREA.USUARIO.direccion = area.USUARIO.direccion;
                aREA.USUARIO.fotografia = area.USUARIO.fotografia;
                aREA.USUARIO.institucion = area.USUARIO.institucion;
                aREA.USUARIO.ROLUSUARIO = area.USUARIO.ROLUSUARIO;

                aREA.TIPOAREA = area.TIPOAREA;
                areasList.Add(aREA);
            }
            return areasList.AsQueryable();
        }

        // GET: api/AREA/5
        [ResponseType(typeof(AREA_PA_U_TA))]
        public async Task<IHttpActionResult> GetAREA(int id)
        {
            var area = await db.AREA.FindAsync(id);
            AREA_PA_U_TA aREA = new AREA_PA_U_TA();
            if (area == null)
            {
                return NotFound();
            }
            else
            {
                aREA.id_Area = area.id_Area;
                aREA.nombre = area.nombre;
                aREA.descripcion = area.descripcion;
                aREA.PISOAREA = area.PISOAREA;

                aREA.USUARIO = new USUARIO_rU();
                aREA.USUARIO.id_Usuario = area.USUARIO.id_Usuario;
                aREA.USUARIO.nombre = area.USUARIO.nombre;
                aREA.USUARIO.email = area.USUARIO.email;
                aREA.USUARIO.telefono = area.USUARIO.telefono;
                aREA.USUARIO.ocupacion = area.USUARIO.ocupacion;
                aREA.USUARIO.direccion = area.USUARIO.direccion;
                aREA.USUARIO.fotografia = area.USUARIO.fotografia;
                aREA.USUARIO.institucion = area.USUARIO.institucion;
                aREA.USUARIO.ROLUSUARIO = area.USUARIO.ROLUSUARIO;
            }

            return Ok(aREA);
        }

        // PUT: api/AREA/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutAREA(int id, AREA aREA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != aREA.id_Area)
            {
                return BadRequest();
            }

            db.Entry(aREA).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AREAExists(id))
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

        // POST: api/AREA
        [ResponseType(typeof(AREA))]
        public async Task<IHttpActionResult> PostAREA(AREA aREA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AREA.Add(aREA);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = aREA.id_Area }, aREA);
        }

        // DELETE: api/AREA/5
        [ResponseType(typeof(AREA))]
        public async Task<IHttpActionResult> DeleteAREA(int id)
        {
            AREA aREA = await db.AREA.FindAsync(id);
            if (aREA == null)
            {
                return NotFound();
            }

            db.AREA.Remove(aREA);
            await db.SaveChangesAsync();

            return Ok(aREA);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AREAExists(int id)
        {
            return db.AREA.Count(e => e.id_Area == id) > 0;
        }
    }
}