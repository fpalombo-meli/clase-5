const fiesta_de_cumpleaños = {
  invitados: ["guille", "tebo", "maxi", "dio", "jorge", "pablo", "patricio"],
  saludarInvitados: function () {
    console.log(
      `Hola, les presento a ${this.invitados}. \nQue la pasen lindo en la fiesta.`
    );
  },
};

fiesta_de_cumpleaños.saludarInvitados();
