export function truncateString(str: string) {
  if (str.length > 37) {
    return str.substring(0, 37 - 3) + "...";
  } else {
    return str;
  }
}
interface EnvVariables {
  APP_DEBUG?: string;
  CF_KEY?: string;
  CF_ZONE?: string;
  CORS_KEY?: string;
}

export default function envGet(element: keyof EnvVariables): string | boolean {
  switch (element) {
    case 'APP_DEBUG':
      return import.meta.env.APP_DEBUG === 'true';
    case 'CF_KEY':
      return import.meta.env.CF_KEY;
    case 'CF_ZONE':
      return import.meta.env.CF_ZONE;
    case 'CORS_KEY':
      return import.meta.env.CORS_KEY;
    default:
      return '';
  }
}
export interface ZoneElement {
  id: string;
  zone_id: string;
  zone_name: string;
  name: string;
  type: string;
  content: string;
  proxiable: boolean;
  proxied: boolean;
  ttl: number;
  locked: boolean;
  meta: {
    auto_added: boolean;
    managed_by_apps: boolean;
    managed_by_argo_tunnel: boolean;
    source: string;
  };
  comment?: string | null;
  tags: string[];
  created_on: string;
  modified_on: string;
}

export interface CloudFlare_EDIT {
  errors: any[];
  messages: any[];
  result: {
    content: string;
    name: string;
    proxied: boolean;
    type: string;
    comment: string;
    created_on: string;
    id: string;
    locked: boolean;
    meta: {
      auto_added: boolean;
      source: string;
    };
    modified_on: string;
    proxiable: boolean;
    tags: string[];
    ttl: number;
    zone_id: string;
    zone_name: string;
  };
  success: boolean;
}

export interface API_ANSWER {
  status: boolean;
  message: string;
}