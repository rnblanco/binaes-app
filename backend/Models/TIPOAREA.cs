namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TIPOAREA")]
    public partial class TIPOAREA
    {
        [Key]
        public int id_tipoArea { get; set; }

        [Column("tipoArea")]
        [StringLength(30)]
        public string tipoArea1 { get; set; }
    }
}
