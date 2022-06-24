namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("PISOAREA")]
    public partial class PISOAREA
    {
        [Key]
        public int id_pisoArea { get; set; }

        [Column("pisoArea")]
        [StringLength(10)]
        public string pisoArea1 { get; set; }
    }
}
