using backend.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace backend.Controllers
{
    [Authorize]
    public class EVENTOController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/EVENTO
        public IQueryable<EVENTO_A> GetEVENTO()
        {
            var events = db.EVENTO.ToList();
            List<EVENTO_A> eventsList = new List<EVENTO_A>();
            foreach (var e in events)
            {
                EVENTO_A eVENTO = new EVENTO_A();
                eVENTO.id_Evento = e.id_Evento;
                eVENTO.titulo = e.titulo;
                eVENTO.imagen = e.imagen;
                eVENTO.capacidad = e.capacidad;
                eVENTO.aprobado = e.aprobado;
                eVENTO.fh_Inicio = e.fh_Inicio;
                eVENTO.fh_Finalizacion = e.fh_Finalizacion;

                eVENTO.AREA = new AREA_PA_U_TA();
                eVENTO.AREA.id_Area = e.AREA.id_Area;
                eVENTO.AREA.nombre = e.AREA.nombre;
                eVENTO.AREA.descripcion = e.AREA.descripcion;
                eVENTO.AREA.PISOAREA = e.AREA.PISOAREA;

                eVENTO.AREA.USUARIO = new USUARIO_rU();
                eVENTO.AREA.USUARIO.id_Usuario = e.AREA.USUARIO.id_Usuario;
                eVENTO.AREA.USUARIO.nombre = e.AREA.USUARIO.nombre;
                eVENTO.AREA.USUARIO.email = e.AREA.USUARIO.email;
                eVENTO.AREA.USUARIO.telefono = e.AREA.USUARIO.telefono;
                eVENTO.AREA.USUARIO.ocupacion = e.AREA.USUARIO.ocupacion;
                eVENTO.AREA.USUARIO.direccion = e.AREA.USUARIO.direccion;
                eVENTO.AREA.USUARIO.fotografia = e.AREA.USUARIO.fotografia;
                eVENTO.AREA.USUARIO.institucion = e.AREA.USUARIO.institucion;
                eVENTO.AREA.USUARIO.ROLUSUARIO = e.AREA.USUARIO.ROLUSUARIO;

                eVENTO.AREA.TIPOAREA = e.AREA.TIPOAREA;

                eventsList.Add(eVENTO);
            }
            return eventsList.AsQueryable();
        }

        // GET: api/EVENTO?limit=5&page=1&search=test&sortby=col:ASC
        public IQueryable<EVENTO_A> GetEVENTO(int limit, int page, string search, string SortBy)
        {
            var sorted = "id_Evento ascending";
            if (SortBy != null)
            {
                string[] sortby = SortBy.Split(':');
                sorted = sortby[0] + " " + (sortby[1].Equals("ASC") ? "ascending" : "descending");
            }
            var events = db.EVENTO
                .Where(x =>
                    DbFunctions.Like(x.titulo, "%" + search + "%") ||
                    DbFunctions.Like(x.capacidad.ToString(), "%" + search + "%") ||
                    DbFunctions.Like(x.AREA.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.aprobado ? "No aprobado" : "Aprobado", "%" + search + "%") ||
                    DbFunctions.Like(DbFunctions.TruncateTime(x.fh_Inicio).ToString(), "%" + search + "%") ||
                    DbFunctions.Like(DbFunctions.TruncateTime(x.fh_Finalizacion).ToString(), "%" + search + "%"))
                .OrderBy(sorted).Skip((page - 1) * limit).Take(limit).ToList();
            List<EVENTO_A> eventsList = new List<EVENTO_A>();
            foreach (var e in events)
            {
                EVENTO_A eVENTO = new EVENTO_A();
                eVENTO.id_Evento = e.id_Evento;
                eVENTO.titulo = e.titulo;
                eVENTO.imagen = e.imagen;
                eVENTO.capacidad = e.capacidad;
                eVENTO.aprobado = e.aprobado;
                eVENTO.fh_Inicio = e.fh_Inicio;
                eVENTO.fh_Finalizacion = e.fh_Finalizacion;

                eVENTO.AREA = new AREA_PA_U_TA();
                eVENTO.AREA.id_Area = e.AREA.id_Area;
                eVENTO.AREA.nombre = e.AREA.nombre;
                eVENTO.AREA.descripcion = e.AREA.descripcion;
                eVENTO.AREA.PISOAREA = e.AREA.PISOAREA;

                eVENTO.AREA.USUARIO = new USUARIO_rU();
                eVENTO.AREA.USUARIO.id_Usuario = e.AREA.USUARIO.id_Usuario;
                eVENTO.AREA.USUARIO.nombre = e.AREA.USUARIO.nombre;
                eVENTO.AREA.USUARIO.email = e.AREA.USUARIO.email;
                eVENTO.AREA.USUARIO.telefono = e.AREA.USUARIO.telefono;
                eVENTO.AREA.USUARIO.ocupacion = e.AREA.USUARIO.ocupacion;
                eVENTO.AREA.USUARIO.direccion = e.AREA.USUARIO.direccion;
                eVENTO.AREA.USUARIO.fotografia = e.AREA.USUARIO.fotografia;
                eVENTO.AREA.USUARIO.institucion = e.AREA.USUARIO.institucion;
                eVENTO.AREA.USUARIO.ROLUSUARIO = e.AREA.USUARIO.ROLUSUARIO;

                eVENTO.AREA.TIPOAREA = e.AREA.TIPOAREA;

                eventsList.Add(eVENTO);
            }
            return eventsList.AsQueryable();
        }

        // GET: api/EVENTO/5
        [ResponseType(typeof(EVENTO_A))]
        public async Task<IHttpActionResult> GetEVENTO(int id)
        {
            var e = await db.EVENTO.FindAsync(id);
            EVENTO_A eVENTO = new EVENTO_A();
            if (e == null)
            {
                return NotFound();
            }
            else
            {
                eVENTO.id_Evento = e.id_Evento;
                eVENTO.titulo = e.titulo;
                eVENTO.imagen = e.imagen;
                eVENTO.capacidad = e.capacidad;
                eVENTO.aprobado = e.aprobado;
                eVENTO.fh_Inicio = e.fh_Inicio;
                eVENTO.fh_Finalizacion = e.fh_Finalizacion;

                eVENTO.AREA = new AREA_PA_U_TA();
                eVENTO.AREA.id_Area = e.AREA.id_Area;
                eVENTO.AREA.nombre = e.AREA.nombre;
                eVENTO.AREA.descripcion = e.AREA.descripcion;
                eVENTO.AREA.PISOAREA = e.AREA.PISOAREA;

                eVENTO.AREA.USUARIO = new USUARIO_rU();
                eVENTO.AREA.USUARIO.id_Usuario = e.AREA.USUARIO.id_Usuario;
                eVENTO.AREA.USUARIO.nombre = e.AREA.USUARIO.nombre;
                eVENTO.AREA.USUARIO.email = e.AREA.USUARIO.email;
                eVENTO.AREA.USUARIO.telefono = e.AREA.USUARIO.telefono;
                eVENTO.AREA.USUARIO.ocupacion = e.AREA.USUARIO.ocupacion;
                eVENTO.AREA.USUARIO.direccion = e.AREA.USUARIO.direccion;
                eVENTO.AREA.USUARIO.fotografia = e.AREA.USUARIO.fotografia;
                eVENTO.AREA.USUARIO.institucion = e.AREA.USUARIO.institucion;
                eVENTO.AREA.USUARIO.ROLUSUARIO = e.AREA.USUARIO.ROLUSUARIO;

                eVENTO.AREA.TIPOAREA = e.AREA.TIPOAREA;
            }

            return Ok(eVENTO);
        }

        // GET: api/EVENTO/5 Fechas deshabilitadas
        [ResponseType(typeof(List<DateTime>))]
        public IQueryable<DateTime> GetFREE_AREA(int id_areaRealizacion)
        {
            var eventos = db.EVENTO.Where(p => p.id_areaRealizacion== id_areaRealizacion).ToList();
            List<DateTime> disabledDates = new List<DateTime>();

            foreach (var evento in eventos)
            {
                while (evento.fh_Finalizacion >= evento.fh_Inicio)
                {
                    disabledDates.Add(evento.fh_Inicio);
                    evento.fh_Inicio = evento.fh_Inicio.AddDays(1);
                }
            }
            return disabledDates.AsQueryable();
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