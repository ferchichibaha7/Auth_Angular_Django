from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True} # prevent returning password to front
        }

    def create(self, validated_data): # to hash the password 
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class UsersSerializer(serializers.ModelSerializer):
     
    class Meta:
        model = User
        fields = ('id',
                  'email',
                  'date_joined')