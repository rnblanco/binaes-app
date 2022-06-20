namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TIPOCOLECCION")]
    public partial class TIPOCOLECCION
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TIPOCOLECCION()
        {
            COLECCION = new HashSet<COLECCION>();
        }

        [Key]
        public int id_tipoColeccion { get; set; }

        [Column("tipoColeccion")]
        [StringLength(30)]
        public string tipoColeccion1 { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<COLECCION> COLECCION { get; set; }
    }
}
