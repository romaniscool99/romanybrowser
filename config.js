// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/frog/ixl/",
  bare: "/tspmo/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "handler.js",
  client: "client.js",
  bundle: "bundle.js",
  config: "config.js",
  sw: "fr.sw.js",
};
