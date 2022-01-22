export interface Listing2Model {
  _id: string;
  config: Config[];
  created_at: string;
  description: string;
  id: string;
  id_incr: number;
  info: Info;
  logo: string;
  module_name: string;
  name: string;
  publishable: string;
  rejected_message: string;
  screenshots: string[];
  short_description: string;
  status: string;
  type: string;
  updated_at: string;
  user_id: string;
  functions?: Function[];
}

export interface Config {
  attribute: string;
  type: string;
  value: string;
}

export interface Function {
  function_id: string;
  function_name: string;
  function_url: FunctionURL;
}

export interface FunctionURL {
  vi: string;
}

export interface Info {
  email: string;
  phone_number: string;
  website: string;
}
