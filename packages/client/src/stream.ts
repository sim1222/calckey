import * as Misskey from "calckey-js";
import { markRaw } from "vue";
import { $i } from "@/account";
import { url } from "@/config";

export const stream = markRaw(
	new Misskey.Stream(
		url,
		$i
			? {
					token: $i.token,
			  }
			: null,
	),
);
