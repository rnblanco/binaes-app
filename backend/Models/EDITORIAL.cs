namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("EDITORIAL")]
    public partial class EDITORIAL
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public EDITORIAL()
        {
            EJEMPLAR = new HashSet<EJEMPLAR>();
        }

        [Key]
        public int id_Editorial { get; set; }

        [Column("editorial")]
        [Required]
        [StringLength(60)]
        public string editorial1 { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<EJEMPLAR> EJEMPLAR { get; set; }
    }
}
