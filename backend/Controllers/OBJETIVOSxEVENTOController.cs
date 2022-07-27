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
    public class OBJETIVOSxEVENTOController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();


        // GET: api/OBJETIVOSxEVENTO
        public IQueryable<OBJETIVOSxEVENTO_E> GetOBJETIVOSxEVENTO()
        {
            var objectivesEvent = db.OBJETIVOSxEVENTO.ToList();
            List<OBJETIVOSxEVENTO_E> objectivesEventList = new List<OBJETIVOSxEVENTO_E>();
            foreach (var objectiveEvent in objectivesEvent)
            {
                OBJETIVOSxEVENTO_E oBJETIVOSxEVENTO_E = new OBJETIVOSxEVENTO_E();

                oBJETIVOSxEVENTO_E.id_Objetivo = objectiveEvent.id_Objetivo;
                oBJETIVOSxEVENTO_E.Objetivo = objectiveEvent.Objetivo;

                oBJETIVOSxEVENTO_E.EVENTO = new EVENTO_A();
                oBJETIVOSxEVENTO_E.EVENTO.id_Evento = objectiveEvent.EVENTO.id_Evento;
                oBJETIVOSxEVENTO_E.EVENTO.titulo = objectiveEvent.EVENTO.titulo;
                oBJETIVOSxEVENTO_E.EVENTO.imagen = Encoding.UTF8.GetString(objectiveEvent.EVENTO.imagen);
                oBJETIVOSxEVENTO_E.EVENTO.capacidad = objectiveEvent.EVENTO.capacidad;
                oBJETIVOSxEVENTO_E.EVENTO.aprobado = objectiveEvent.EVENTO.aprobado;
                oBJETIVOSxEVENTO_E.EVENTO.fh_Inicio = objectiveEvent.EVENTO.fh_Inicio;
                oBJETIVOSxEVENTO_E.EVENTO.fh_Finalizacion = objectiveEvent.EVENTO.fh_Finalizacion;

                oBJETIVOSxEVENTO_E.EVENTO.AREA = new AREA_PA_U_TA();
                oBJETIVOSxEVENTO_E.EVENTO.AREA.id_Area = objectiveEvent.EVENTO.AREA.id_Area;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.nombre = objectiveEvent.EVENTO.AREA.nombre;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.descripcion = objectiveEvent.EVENTO.AREA.descripcion;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.PISOAREA = objectiveEvent.EVENTO.AREA.PISOAREA;

                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO = new USUARIO_rU();
                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO.id_Usuario = objectiveEvent.EVENTO.AREA.USUARIO.id_Usuario;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO.nombre = objectiveEvent.EVENTO.AREA.USUARIO.nombre;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO.email = objectiveEvent.EVENTO.AREA.USUARIO.email;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO.telefono = objectiveEvent.EVENTO.AREA.USUARIO.telefono;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO.ocupacion = objectiveEvent.EVENTO.AREA.USUARIO.ocupacion;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO.direccion = objectiveEvent.EVENTO.AREA.USUARIO.direccion;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO.fotografia = Encoding.UTF8.GetString(objectiveEvent.EVENTO.AREA.USUARIO.fotografia);
                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO.institucion = objectiveEvent.EVENTO.AREA.USUARIO.institucion;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO.ROLUSUARIO = objectiveEvent.EVENTO.AREA.USUARIO.ROLUSUARIO;

                oBJETIVOSxEVENTO_E.EVENTO.AREA.TIPOAREA = objectiveEvent.EVENTO.AREA.TIPOAREA;

                objectivesEventList.Add(oBJETIVOSxEVENTO_E);
            }
            return objectivesEventList.AsQueryable();
        }

        // GET: api/OBJETIVOSxEVENTO/5
        public IQueryable<OBJETIVOSxEVENTO_E> GetOBJETIVOSxEVENTO(int id_Evento)
        {
            var objectiveEvents = db.OBJETIVOSxEVENTO.Where(x => x.EVENTO.id_Evento == id_Evento).ToList();
            List<OBJETIVOSxEVENTO_E> objectivesEventList = new List<OBJETIVOSxEVENTO_E>();
            foreach (var objectiveEvent in objectiveEvents)
            {
                OBJETIVOSxEVENTO_E oBJETIVOSxEVENTO_E = new OBJETIVOSxEVENTO_E();

                oBJETIVOSxEVENTO_E.id_Objetivo = objectiveEvent.id_Objetivo;
                oBJETIVOSxEVENTO_E.Objetivo = objectiveEvent.Objetivo;

                oBJETIVOSxEVENTO_E.EVENTO = new EVENTO_A();
                oBJETIVOSxEVENTO_E.EVENTO.id_Evento = objectiveEvent.EVENTO.id_Evento;
                oBJETIVOSxEVENTO_E.EVENTO.titulo = objectiveEvent.EVENTO.titulo;
                oBJETIVOSxEVENTO_E.EVENTO.imagen = Encoding.UTF8.GetString(objectiveEvent.EVENTO.imagen);
                oBJETIVOSxEVENTO_E.EVENTO.capacidad = objectiveEvent.EVENTO.capacidad;
                oBJETIVOSxEVENTO_E.EVENTO.aprobado = objectiveEvent.EVENTO.aprobado;
                oBJETIVOSxEVENTO_E.EVENTO.fh_Inicio = objectiveEvent.EVENTO.fh_Inicio;
                oBJETIVOSxEVENTO_E.EVENTO.fh_Finalizacion = objectiveEvent.EVENTO.fh_Finalizacion;

                oBJETIVOSxEVENTO_E.EVENTO.AREA = new AREA_PA_U_TA();
                oBJETIVOSxEVENTO_E.EVENTO.AREA.id_Area = objectiveEvent.EVENTO.AREA.id_Area;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.nombre = objectiveEvent.EVENTO.AREA.nombre;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.descripcion = objectiveEvent.EVENTO.AREA.descripcion;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.PISOAREA = objectiveEvent.EVENTO.AREA.PISOAREA;

                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO = new USUARIO_rU();
                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO.id_Usuario = objectiveEvent.EVENTO.AREA.USUARIO.id_Usuario;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO.nombre = objectiveEvent.EVENTO.AREA.USUARIO.nombre;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO.email = objectiveEvent.EVENTO.AREA.USUARIO.email;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO.telefono = objectiveEvent.EVENTO.AREA.USUARIO.telefono;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO.ocupacion = objectiveEvent.EVENTO.AREA.USUARIO.ocupacion;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO.direccion = objectiveEvent.EVENTO.AREA.USUARIO.direccion;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO.fotografia = Encoding.UTF8.GetString(objectiveEvent.EVENTO.AREA.USUARIO.fotografia);
                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO.institucion = objectiveEvent.EVENTO.AREA.USUARIO.institucion;
                oBJETIVOSxEVENTO_E.EVENTO.AREA.USUARIO.ROLUSUARIO = objectiveEvent.EVENTO.AREA.USUARIO.ROLUSUARIO;

                oBJETIVOSxEVENTO_E.EVENTO.AREA.TIPOAREA = objectiveEvent.EVENTO.AREA.TIPOAREA;

                objectivesEventList.Add(oBJETIVOSxEVENTO_E);
            }

            return objectivesEventList.AsQueryable();
        }        

        // PUT: api/OBJETIVOSxEVENTO/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutOBJETIVOSxEVENTO(int id, OBJETIVOSxEVENTO oBJETIVOSxEVENTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != oBJETIVOSxEVENTO.id_Objetivo)
            {
                return BadRequest();
            }

            db.Entry(oBJETIVOSxEVENTO).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OBJETIVOSxEVENTOExists(id))
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

        // POST: api/OBJETIVOSxEVENTO
        [ResponseType(typeof(OBJETIVOSxEVENTO))]
        public async Task<IHttpActionResult> PostOBJETIVOSxEVENTO(OBJETIVOSxEVENTO oBJETIVOSxEVENTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.OBJETIVOSxEVENTO.Add(oBJETIVOSxEVENTO);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = oBJETIVOSxEVENTO.id_Objetivo }, oBJETIVOSxEVENTO);
        }

        // DELETE: api/OBJETIVOSxEVENTO/5
        [ResponseType(typeof(OBJETIVOSxEVENTO))]
        public async Task<IHttpActionResult> DeleteOBJETIVOSxEVENTO(int id)
        {
            OBJETIVOSxEVENTO oBJETIVOSxEVENTO = await db.OBJETIVOSxEVENTO.FindAsync(id);
            if (oBJETIVOSxEVENTO == null)
            {
                return NotFound();
            }

            db.OBJETIVOSxEVENTO.Remove(oBJETIVOSxEVENTO);
            await db.SaveChangesAsync();

            return Ok(oBJETIVOSxEVENTO);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool OBJETIVOSxEVENTOExists(int id)
        {
            return db.OBJETIVOSxEVENTO.Count(e => e.id_Objetivo == id) > 0;
        }
    }
}