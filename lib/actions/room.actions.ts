"use server";

import { nanoid } from "nanoid";
import {liveblocks} from "@/lib/liveblocks";
import {revalidatePath} from "next/cache";
import {parseStringify} from "@/lib/utils";

export const createDocument = async ({ userId, email} : CreateDocumentParams ) => {
  const roomId = nanoid();

  try {
    const metadata = {
      creatorId: userId,
      email,
      title: 'Untitled',
    }

    const usersAccesses: RoomAccesses = {
      [email]: ["room:write"],
    }

    const room = await liveblocks.createRoom(roomId, {
      metadata,
      usersAccesses,
      defaultAccesses: []
    });
    revalidatePath('/')

    return parseStringify(room);

  } catch(err) {
    console.error(`Error happen while creating a room: ${err}`);
  }
}