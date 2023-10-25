import { Box, Center, Flex, Link, List, ListItem, Spinner, Stack, Text, Image, Button } from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import { Error } from 'components/error';
import { FormListItem } from 'components/form-list-item';
import { FormWrapper } from 'components/form-wrapper';
import AppLayout from 'layout/app-layout';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useMemo } from 'react';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import { routes } from 'routes';
import { compose } from 'lib/compose';
import {
  AccessOperationEnum,
  AccessServiceEnum,
  requireNextAuth,
  useAuthorizationApi,
  withAuthorization,
} from '@roq/nextjs';
import { UserPageTable } from 'components/user-page-table';
import { EntityImage } from 'components/entity-image';
import { FiEdit2 } from 'react-icons/fi';
import { convertQueryToPrismaUtil } from 'lib/utils';
import * as RoqTypes from 'lib/roq/types';
import { useAppointmentFindFirst, useRoqClient } from 'lib/roq';

import { AppointmentInterface } from 'interfaces/appointment';

function AppointmentViewPage() {
  const { hasAccess } = useAuthorizationApi();
  const router = useRouter();
  const id = router.query.id as string;
  const roqClient = useRoqClient();
  const queryParams = useMemo<{
    include: { client_k: boolean; medical_staff: boolean; clinic: boolean; insurance_provider: boolean };
  }>(
    () =>
      convertQueryToPrismaUtil(
        {
          relations: ['client_k', 'medical_staff', 'clinic', 'insurance_provider'],
          id,
        },
        'appointment',
      ),
    [id],
  );
  const { data, error, isLoading } = useAppointmentFindFirst(queryParams, {}, { disabled: !id });

  const [deleteError, setDeleteError] = useState(null);
  const [createError, setCreateError] = useState(null);

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Appointments',
              link: '/appointments',
            },
            {
              label: 'Appointment Details',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        {isLoading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <>
            <FormWrapper wrapperProps={{ border: 'none', gap: 3, p: 0 }}>
              <Flex alignItems="center" w="full" justifyContent={'space-between'}>
                <Box>
                  <Text
                    sx={{
                      fontSize: '1.875rem',
                      fontWeight: 700,
                      color: 'base.content',
                    }}
                  >
                    Appointment Details
                  </Text>
                </Box>
                {hasAccess('appointment', AccessOperationEnum.UPDATE, AccessServiceEnum.PROJECT) && (
                  <NextLink href={`/appointments/edit/${id}`} passHref legacyBehavior>
                    <Button
                      onClick={(e) => e.stopPropagation()}
                      mr={2}
                      padding="0rem 0.5rem"
                      height="24px"
                      fontSize="0.75rem"
                      variant="outline"
                      color="state.info.main"
                      borderRadius="6px"
                      border="1px"
                      borderColor="state.info.transparent"
                      leftIcon={<FiEdit2 width="12px" height="12px" color="state.info.main" />}
                    >
                      Edit
                    </Button>
                  </NextLink>
                )}
              </Flex>

              <List
                w="100%"
                css={{
                  '> li:not(:last-child)': {
                    borderBottom: '1px solid var(--chakra-colors-base-300)',
                  },
                }}
              >
                <FormListItem label="Date Time" text={data?.date_time ? format(data?.date_time, 'dd-MM-yyyy') : ''} />

                <FormListItem label="Status" text={data?.status} />

                <FormListItem
                  label="Created At"
                  text={data?.created_at ? format(data?.created_at, 'dd-MM-yyyy') : ''}
                />

                <FormListItem
                  label="Updated At"
                  text={data?.updated_at ? format(data?.updated_at, 'dd-MM-yyyy') : ''}
                />

                {hasAccess('client_k', AccessOperationEnum.READ, AccessServiceEnum.PROJECT) && (
                  <FormListItem
                    label="Client K"
                    text={
                      <Link as={NextLink} href={`/client-ks/view/${data?.client_k?.id}`}>
                        {data?.client_k?.gender + ''}
                      </Link>
                    }
                  />
                )}
                {hasAccess('medical_staff', AccessOperationEnum.READ, AccessServiceEnum.PROJECT) && (
                  <FormListItem
                    label="Medical Staff"
                    text={
                      <Link as={NextLink} href={`/medical-staffs/view/${data?.medical_staff?.id}`}>
                        {data?.medical_staff?.specialization + ''}
                      </Link>
                    }
                  />
                )}
                {hasAccess('clinic', AccessOperationEnum.READ, AccessServiceEnum.PROJECT) && (
                  <FormListItem
                    label="Clinic"
                    text={
                      <Link as={NextLink} href={`/clinics/view/${data?.clinic?.id}`}>
                        {data?.clinic?.name + ''}
                      </Link>
                    }
                  />
                )}
                {hasAccess('insurance_provider', AccessOperationEnum.READ, AccessServiceEnum.PROJECT) && (
                  <FormListItem
                    label="Insurance Provider"
                    text={
                      <Link as={NextLink} href={`/insurance-providers/view/${data?.insurance_provider?.id}`}>
                        {data?.insurance_provider?.email + ''}
                      </Link>
                    }
                  />
                )}
              </List>
            </FormWrapper>
          </>
        )}
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'appointment',
    operation: AccessOperationEnum.READ,
  }),
)(AppointmentViewPage);
