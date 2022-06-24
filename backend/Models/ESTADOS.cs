namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;

    public partial class ESTADOS
    {
        [Key]
        public int id_Estado { get; set; }

        [Required]
        [StringLength(20)]
        public string estado { get; set; }
    }
}
