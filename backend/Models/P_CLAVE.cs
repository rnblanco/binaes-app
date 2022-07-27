namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("P_CLAVE")]
    public partial class P_CLAVE
    {
        [Key]
        public int id_p_clave { get; set; }

        [Required]
        [StringLength(50)]
        public string p_clave { get; set; }
    }
}
