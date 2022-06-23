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
        [Key]
        public int id_Editorial { get; set; }

        [Column("editorial")]
        [Required]
        [StringLength(60)]
        public string editorial1 { get; set; }
    }
}
