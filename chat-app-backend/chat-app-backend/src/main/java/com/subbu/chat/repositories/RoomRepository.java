package com.subbu.chat.repositories;

import com.subbu.chat.entities.Room;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoomRepository extends MongoRepository<Room,String> {

    Room findByRoomId(String roomId);
}
