using backend.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace backend.Controllers
{
    [Authorize]
    public class HORARIOxAREAController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/HORARIOxAREA
        public IQueryable<HORARIOxAREA_A> GetHORARIOxAREA()
        {
            var schedules = db.HORARIOxAREA;
            List<HORARIOxAREA_A> schedulesList = new List<HORARIOxAREA_A>();
            foreach (var schedule in schedules)
            {
                HORARIOxAREA_A hORARIOxAREA_A = new HORARIOxAREA_A();
                hORARIOxAREA_A.id_Horario = schedule.id_Horario;
                hORARIOxAREA_A.horaAbierto = schedule.horaAbierto;
                hORARIOxAREA_A.horaCierre = schedule.horaCierre;

                hORARIOxAREA_A.AREA = new AREA_PA_U_TA();
                hORARIOxAREA_A.AREA.id_Area = schedule.AREA.id_Area;
                hORARIOxAREA_A.AREA.nombre = schedule.AREA.nombre;
                hORARIOxAREA_A.AREA.descripcion = schedule.AREA.descripcion;
                hORARIOxAREA_A.AREA.PISOAREA = schedule.AREA.PISOAREA;

                hORARIOxAREA_A.AREA.USUARIO = new USUARIO_rU();
                hORARIOxAREA_A.AREA.USUARIO.id_Usuario = schedule.AREA.USUARIO.id_Usuario;
                hORARIOxAREA_A.AREA.USUARIO.nombre = schedule.AREA.USUARIO.nombre;
                hORARIOxAREA_A.AREA.USUARIO.email = schedule.AREA.USUARIO.email;
                hORARIOxAREA_A.AREA.USUARIO.telefono = schedule.AREA.USUARIO.telefono;
                hORARIOxAREA_A.AREA.USUARIO.ocupacion = schedule.AREA.USUARIO.ocupacion;
                hORARIOxAREA_A.AREA.USUARIO.direccion = schedule.AREA.USUARIO.direccion;
                hORARIOxAREA_A.AREA.USUARIO.fotografia = Encoding.UTF8.GetString(schedule.AREA.USUARIO.fotografia);
                hORARIOxAREA_A.AREA.USUARIO.institucion = schedule.AREA.USUARIO.institucion;
                hORARIOxAREA_A.AREA.USUARIO.ROLUSUARIO = schedule.AREA.USUARIO.ROLUSUARIO;

                schedulesList.Add(hORARIOxAREA_A);
            }
            return schedulesList.AsQueryable();
        }

        // GET: api/HORARIOxAREA?id_Area=1
        public IQueryable<HORARIOxAREA_A> GetHORARIOxAREA(int id_Area)
        {
            var schedules = db.HORARIOxAREA.Where(x => x.id_Area == id_Area);
            List<HORARIOxAREA_A> schedulesList = new List<HORARIOxAREA_A>();
            foreach (var schedule in schedules)
            {
                HORARIOxAREA_A hORARIOxAREA_A = new HORARIOxAREA_A();
                hORARIOxAREA_A.id_Horario = schedule.id_Horario;
                hORARIOxAREA_A.horaAbierto = schedule.horaAbierto;
                hORARIOxAREA_A.horaCierre = schedule.horaCierre;

                hORARIOxAREA_A.AREA = new AREA_PA_U_TA();
                hORARIOxAREA_A.AREA.id_Area = schedule.AREA.id_Area;
                hORARIOxAREA_A.AREA.nombre = schedule.AREA.nombre;
                hORARIOxAREA_A.AREA.descripcion = schedule.AREA.descripcion;
                hORARIOxAREA_A.AREA.PISOAREA = schedule.AREA.PISOAREA;

                hORARIOxAREA_A.AREA.USUARIO = new USUARIO_rU();
                hORARIOxAREA_A.AREA.USUARIO.id_Usuario = schedule.AREA.USUARIO.id_Usuario;
                hORARIOxAREA_A.AREA.USUARIO.nombre = schedule.AREA.USUARIO.nombre;
                hORARIOxAREA_A.AREA.USUARIO.email = schedule.AREA.USUARIO.email;
                hORARIOxAREA_A.AREA.USUARIO.telefono = schedule.AREA.USUARIO.telefono;
                hORARIOxAREA_A.AREA.USUARIO.ocupacion = schedule.AREA.USUARIO.ocupacion;
                hORARIOxAREA_A.AREA.USUARIO.direccion = schedule.AREA.USUARIO.direccion;
                hORARIOxAREA_A.AREA.USUARIO.fotografia = Encoding.UTF8.GetString(schedule.AREA.USUARIO.fotografia);
                hORARIOxAREA_A.AREA.USUARIO.institucion = schedule.AREA.USUARIO.institucion;
                hORARIOxAREA_A.AREA.USUARIO.ROLUSUARIO = schedule.AREA.USUARIO.ROLUSUARIO;

                schedulesList.Add(hORARIOxAREA_A);
            }
            return schedulesList.AsQueryable();
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