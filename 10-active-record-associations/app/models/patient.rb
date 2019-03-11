class Patient < ActiveRecord::Base

    has_many :doctor_patients
    has_many :doctors, through: :doctor_patients

    def hospitals
        self.doctors.collect {|doc| doc.hospital}.uniq
    end
end

