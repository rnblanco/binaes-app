namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("USUARIO")]
    public partial class USUARIO
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public USUARIO()
        {
            AREA = new HashSet<AREA>();
            PRESTAMO = new HashSet<PRESTAMO>();
            TOKEN = new HashSet<TOKEN>();
            VISITAS = new HashSet<VISITAS>();
        }

        [Key]
        [StringLength(8)]
        public string id_Usuario { get; set; }

        [Required]
        [StringLength(50)]
        public string nombre { get; set; }

        [Required]
        [StringLength(50)]
        public string email { get; set; }

        [Required]
        [StringLength(12)]
        public string telefono { get; set; }

        [Required]
        [StringLength(15)]
        public string ocupacion { get; set; }

        [Required]
        [StringLength(100)]
        public string direccion { get; set; }

        [Required]
        public byte[] fotografia { get; set; }

        [Required]
        [StringLength(50)]
        public string institucion { get; set; }

        public int id_rolUsuario { get; set; }

        [Required]
        [MaxLength(256)]
        public byte[] contrasena { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AREA> AREA { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PRESTAMO> PRESTAMO { get; set; }

        public virtual ROLUSUARIO ROLUSUARIO { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TOKEN> TOKEN { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<VISITAS> VISITAS { get; set; }
    }
}
