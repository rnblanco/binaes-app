namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("COLECCION")]
    public partial class COLECCION
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public COLECCION()
        {
            EJEMPLAR = new HashSet<EJEMPLAR>();
        }

        [Key]
        public int id_Coleccion { get; set; }

        [Required]
        [StringLength(50)]
        public string nombre { get; set; }

        public int id_tipoColeccion { get; set; }

        public int id_generoColeccion { get; set; }

        public int id_areaPertenece { get; set; }

        public virtual AREA AREA { get; set; }

        public virtual GENEROCOLECCION GENEROCOLECCION { get; set; }

        public virtual TIPOCOLECCION TIPOCOLECCION { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<EJEMPLAR> EJEMPLAR { get; set; }
    }
}
