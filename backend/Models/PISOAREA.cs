namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("PISOAREA")]
    public partial class PISOAREA
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public PISOAREA()
        {
            AREA = new HashSet<AREA>();
        }

        [Key]
        public int id_pisoArea { get; set; }

        [Column("pisoArea")]
        [StringLength(10)]
        public string pisoArea1 { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AREA> AREA { get; set; }
    }
}
