namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;

    public partial class P_CLAVExEJEMPLAR
    {
        [Key]
        public int id_p_Clave { get; set; }

        [Required]
        [StringLength(30)]
        public string p_clave { get; set; }

        public int id_Ejemplar { get; set; }

        public virtual EJEMPLAR EJEMPLAR { get; set; }
    }

    public partial class P_CLAVExEJEMPLAR_E
    {
        [Key]
        public int id_p_Clave { get; set; }

        [Required]
        [StringLength(30)]
        public string p_clave { get; set; }

        public virtual EJEMPLAR_E_F_I_C EJEMPLAR { get; set; }
    }
}
