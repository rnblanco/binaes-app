using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace backend.Models
{
    public partial class BinaesTestModel : DbContext
    {
        public BinaesTestModel()
            : base("name=BinaesConnection")
        {
        }

        public virtual DbSet<TipoColeccion> TipoColeccions { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TipoColeccion>()
                .Property(e => e.tipo_coleccion)
                .IsUnicode(false);
        }
    }
}
