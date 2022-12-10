#!/usr/bin/env perl

use v5.10;
use strict;
use warnings;
use List::Util qw/sum/;

open(my $fh, "<", "input.txt")
    or die "dead: $!";

my %records;
my $no = 1;

while ( my $line = readline($fh) ) {
    chomp $line;
    if( ! length $line ) {
        $no++;
    }
    else {
        $records{$no} += $line;
    }
}
say ((sort @records{keys %records})[-1]);
say sum ((sort @records{keys %records})[-1,-2,-3]);