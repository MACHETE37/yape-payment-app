export class Cliente {
  id_servicio: number=0;
  usuario: string='';
  nombre: string='';
  email: string='';
  cedula: string='';
  direccion: string='';
  localidad: string='';
  ciudad: string='';
  telefono: string='';
  descuento: string='';
  saldo: string='';
  rfc: string='';
  informacion_adicional: string = '';
  notificacion_sms: string='';
  aviso_pantalla: boolean=false;
  notificaciones_push: boolean=false;
  auto_activar_servicio: boolean=false;
  firewall: boolean=false;
  servicio: string='';
  password_servicio: string='';
  server_hotspot: string='';
  ip: string='';
  ip_local: string ='';
  estado: string='';
  modelo_antena: string='';
  password_cpe: string='';
  mac_cpe: string='';
  interfaz_lan: string='';
  modelo_router_wifi: string='';
  ip_router_wifi: string ='';
  mac_router_wifi: string='';
  usuario_router_wifi: string='';
  password_router_wifi: string='';
  ssid_router_wifi: string='';
  password_ssid_router_wifi: string='';
  comentarios: string='';
  coordenadas: string='';
  costo_instalacion: string='';
  precio_plan: string='';
  forma_contratacion: string='';
  sn_onu: string='';
  estado_facturas: string='';
  fecha_instalacion: string='';
  fecha_cancelacion: Date= new Date;
  fecha_corte: Date=new Date;
  ultimo_cambio: string='';
  plan_internet!: {
    id: number;
    nombre: string | null;
  };
  zona!: {
    id: number;
    nombre: string;
  };
  router!: {
    id: number;
    nombre: string;
    falla_general: boolean;
    falla_general_descripcion: string;
  };
  sectorial: any; // Puedes definir mejor este tipo si conoces su estructura
  tecnico!: {
    id: number;
    nombre: string | null;
  };
}
