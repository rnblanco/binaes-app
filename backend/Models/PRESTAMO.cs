namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("PRESTAMO")]
    public partial class PRESTAMO
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public PRESTAMO()
        {
            RESERVA = new HashSet<RESERVA>();
        }

        [Key]
        public int id_Prestamo { get; set; }

        public DateTime fh_Prestamo { get; set; }

        public DateTime fh_Devolucion { get; set; }

        public int id_Estado { get; set; }

        [Required]
        [StringLength(8)]
        public string id_usuarioPresta { get; set; }

        public int id_Ejemplar { get; set; }

        public virtual EJEMPLAR EJEMPLAR { get; set; }

        public virtual ESTADOS ESTADOS { get; set; }

        public virtual USUARIO USUARIO { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RESERVA> RESERVA { get; set; }
    }
}
